import { useState } from "react";
import "swiper/css";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/ListContainer.css";
import CardListItem from "./CardListItem";

const ListContainer = (props) => {
  const [todolist] = useState(() => {
    const storage = localStorage.getItem("todolist");
    return !storage ? [] : JSON.parse(storage);
  });

  const list = todolist.filter((item) => {
    return item.isDone === props.isDone;
  });

  return (
    <div className="list-container">
      <p className="state-text">{props.working}</p>
      <div className="item-container">
        <Swiper
          className="mySwiper"
          modules={[FreeMode]}
          freeMode={true}
          spaceBetween={30}
          breakpoints={{
            1100: {
              slidesPerView: 4,
            },

            850: {
              slidesPerView: 3,
            },
          }}
        >
          {list.map((item) => {
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
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ListContainer;
