import React, { useState } from "react";
import { Form as AntForm, Input, Button, DatePicker, Select } from "antd";

const AddTaskForm = ({ onAddTask }) => {
  const { Option } = Select;
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskPriority, setTaskPriority] = useState("");

  const handleSubmit = () => {
    const newTask = {
      name: taskName,
      description: taskDescription,
      date: taskDate,
      priority: taskPriority || "low",
    };

    onAddTask(newTask);
    setTaskName("");
    setTaskDescription("");
    setTaskDate("");
    setTaskPriority("low");
  };

  return (
    <>
      <AntForm
        layout="vertical"
        className="bg-stone-100 rounded-lg shadow-md border"
        onFinish={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Добавить задачу
        </h2>

        <AntForm.Item
          label="Название задачи"
          name="title"
          rules={[{ required: true, message: "Введите название задачи!" }]}
        >
          <Input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Введите название"
            className="border-gray-300"
          />
        </AntForm.Item>

        <AntForm.Item label="Описание" name="description">
          <Input.TextArea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Введите описание"
            className="border-gray-300"
          />
        </AntForm.Item>

        <AntForm.Item label="Дата окончания" name="dueDate">
          <DatePicker
            onChange={(date, dateString) => setTaskDate(dateString)}
            className="w-full border-gray-300"
          />
        </AntForm.Item>

        <AntForm.Item label="Приоритет" name="priority">
          <Select
            onChange={(task) => setTaskPriority(task)}
            className="border-gray-300"
            defaultValue="low"
          >
            <Option value="low">Низкий</Option>
            <Option value="medium">Средний</Option>
            <Option value="high">Высокий</Option>
          </Select>
        </AntForm.Item>

        <AntForm.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Добавить задачу
          </Button>
        </AntForm.Item>
      </AntForm>
    </>
  );
};

export default AddTaskForm;
