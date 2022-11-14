import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoAtom } from "./atom";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const CountActiveTodos = (todos) => {
  return todos.filter((todo) => !todo.done).length;
};

const onGetDay = (today) => {
  const allDay = ["일", "월", "화", "수", "목", "금", "토"];
  return allDay[today.getDay()];
};

function TodoHead() {
  const [todos, setTodos] = useRecoilState(todoAtom);
  const today = new Date();

  const day = onGetDay(today);
  const count = CountActiveTodos(todos);
  return (
    <TodoHeadBlock>
      <h1>
        {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일
      </h1>
      <div className="day">{day}요일</div>
      <div className="tasks-left">할 일 {count}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
