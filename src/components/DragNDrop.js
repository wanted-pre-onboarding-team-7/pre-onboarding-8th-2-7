import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import AddBtn from './AddBtn';

function DragNDrop({ data, setModal, setInfo }) {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    setList(data);
  }, [setList, data]);

  const dragItem = useRef();
  const dragNode = useRef();
  const onClickDelete = (grpI, itemI) => {
    setList((oldList) => {
      let newList = JSON.parse(JSON.stringify(oldList));
      newList[grpI].items.splice(itemI, 1);
      localStorage.setItem('List', JSON.stringify(newList));
      return newList;
    });
  };
  const handletDragStart = (e, item) => {
    console.log('Starting to drag', item);

    dragItem.current = item;
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragend', handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };
  const handleDragEnter = (e, targetItem) => {
    e.preventDefault();
    console.log('Entering a drag target', targetItem);
    const currentItem = dragItem.current;
    e.preventDefault();
    if (dragNode.current !== e.target) {
      console.log('Target is NOT the same as dragged item');
      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        newList[targetItem.grpI].items.splice(
          targetItem.itemI,
          0,
          newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0],
        );
        dragItem.current = targetItem;
        localStorage.setItem('List', JSON.stringify(newList));
        return newList;
      });
      e.preventDefault();
    }
    e.preventDefault();
  };
  const handleDragEnd = () => {
    console.log('Ending drag..');
    setDragging(false);
    // dragNode.current.removeEventListener('dragend', handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };
  //   const getStyles = (item) => {
  //     if (
  //       dragItem.current.grpI === item.grpI &&
  //       dragItem.current.itemI === item.itemI
  //     ) {
  //       return 'dnd-item';
  //     }
  //     return 'dnd-item';
  //   };

  if (list) {
    return (
      <div className="drag-n-drop" onDragOver={(e) => e.preventDefault()}>
        {list.map((grp, grpI) => (
          <div
            key={grp.title}
            className="dnd-group"
            onDragEnter={
              dragging && !grp.items.length
                ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                : null
            }
          >
            <div className="group-title">
              <DivCircle flag={grp.color}></DivCircle>
              <div style={{ marginLeft: '3px', marginTop: '3px' }}>
                {grp.title}
              </div>
            </div>
            {grp.items.map((item, itemI) => (
              <div
                draggable
                key={item.id}
                onDragStart={(e) => handletDragStart(e, { grpI, itemI })}
                onDragEnter={
                  dragging
                    ? (e) => {
                        handleDragEnter(e, { grpI, itemI });
                      }
                    : null
                }
                className={'dnd-item'}
              >
                <Flex>
                  <div style={{ margin: '5px' }}>{item.title}</div>
                  <div
                    onClick={() => onClickDelete(grpI, itemI)}
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                  >
                    X
                  </div>
                </Flex>
                <div
                  onClick={() => {
                    setInfo([item, grp.title, grp.color]);
                    setModal(true);
                  }}
                >
                  <div style={{ margin: '5px' }}>{item.manager}</div>
                  <div style={{ margin: '5px' }}>{item.content}</div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      textAlign: 'right',
                      marginRight: '10px',
                    }}
                  >
                    {item.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
const DivCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.flag};
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default DragNDrop;
