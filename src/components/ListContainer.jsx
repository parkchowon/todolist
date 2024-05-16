import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/ListContainer.css";
import CardListItem from "./CardListItem";

const ListContainer = (props) => {
  const [todolists] = useState(() => {
    const storage = localStorage.getItem("todolist");
    return !storage ? [] : JSON.parse(storage);
  });

  const sortedTodos = todolists.filter((item) => {
    return item.isDone === props.isDone;
  });

  return (
    <div className="list-container">
      <p className="state-text">{props.title}</p>
      <div className="item-container">
        <Swiper
          className="mySwiper"
          modules={[FreeMode]}
          freeMode={true}
          slidesPerView="auto"
        >
          {sortedTodos.length === 0 ? (
            <SwiperSlide>
              {props.title === "Working" ? (
                <p className="emptylist-text">
                  아직 작성한 to do list가 없어요!
                </p>
              ) : (
                <p className="emptylist-text">
                  아직 완료한 to do list가 없어요!
                </p>
              )}
            </SwiperSlide>
          ) : (
            sortedTodos.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <CardListItem
                    key={item.id}
                    id={item.id}
                    todolist={item.todolist}
                    isDone={props.isDone}
                  />
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default ListContainer;
