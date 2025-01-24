import { useState, useEffect, useMemo } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { api } from "../../api/api";
import styles from "./BlockContext.module.scss";
import { Block } from "../Block/Block";
import { Preloader } from "../Preloader/Preloader";

interface BlockType {
  id: string;
  code: string;
  index: number;
}

export function BlockContext() {
  const [blocks, setBlocks] = useState<BlockType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlocks = async () => {
    try {
      const response = await api.get<{ result: BlockType[] }>(`/website/58c029b8-6bfc-4b0f-85e1-ae389f7e2745/block`);
      setBlocks(response.data.result);
    } catch (err) {
      setError("Ошибка при загрузке блоков.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const saveBlocksOrder = async (updatedBlocks: BlockType[]) => {
    try {
      await api.post("/website/blocks/orders", { blocks: updatedBlocks });
    } catch (err) {
      console.error("Ошибка при сохранении порядка блоков:", err);
    }
  };

  const onDragEnd = async (result: DropResult) => {
    const { destination, source } = result;
    if (!destination || destination.index === source.index) return;

    const reorderedBlocks = Array.from(blocks);
    const [removed] = reorderedBlocks.splice(source.index, 1);
    reorderedBlocks.splice(destination.index, 0, removed);

    const updatedBlocks = reorderedBlocks.map((block, idx) => ({
      ...block,
      index: idx,
    }));

    setBlocks(updatedBlocks);

    try {
      await saveBlocksOrder(updatedBlocks);
    } catch (err) {
      console.error("Ошибка при сохранении:", err);
    }
  };

  useEffect(() => {
    fetchBlocks();
  }, []);

  const renderedBlocks = useMemo(
    () =>
      blocks.map((block, index) => (
        <Draggable key={block.id} draggableId={block.id} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className={`${styles.block} ${snapshot.isDragging ? styles.dragging : ""}`}
            >
              <Block id={block.id} code={block.code} index={block.index} />
            </div>
          )}
        </Draggable>
      )),
    [blocks]
  );

  if (loading) return <Preloader/>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.context}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="blocks" direction="vertical">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {renderedBlocks}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
