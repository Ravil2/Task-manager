import React, { useState } from "react";
import { Form as AntForm, Input, Button, DatePicker, Select } from "antd";

const AddTaskForm = ({ onAddTask }) => {
  const [form] = AntForm.useForm(); // ← добавляем форму
  const { Option } = Select;

  const handleSubmit = (values) => {
    const newTask = {
      name: values.title.trim(),
      description: values.description.trim(),
      date: values.dueDate,
      priority: values.priority || "low",
    };

    onAddTask(newTask);
    form.resetFields(); 
  };

  return (
    <AntForm
      form={form} 
      layout="vertical"
      className="bg-stone-100 rounded-lg shadow-md border"
      onFinish={handleSubmit}
    >
      <h2 className="text-xl font-bold mb-4 text-gray-700">Добавить задачу</h2>

      <AntForm.Item
        label="Название задачи"
        name="title"
        rules={[
          { required: true, message: "Введите название задачи!" },
          {
            validator: (_, value) =>
              value && value.trim() !== ""
                ? Promise.resolve()
                : Promise.reject("Пробелы — не название :)"),
          },
        ]}
      >
        <Input placeholder="Введите название" className="border-gray-300" />
      </AntForm.Item>

      <AntForm.Item
        label="Описание"
        name="description"
        rules={[
          { required: true, message: "Введите описание!" },
          {
            validator: (_, value) =>
              value && value.trim() !== ""
                ? Promise.resolve()
                : Promise.reject("Пустое описание не канает"),
          },
        ]}
      >
        <Input.TextArea
          placeholder="Введите описание"
          className="border-gray-300"
        />
      </AntForm.Item>

      <AntForm.Item
        label="Дата окончания"
        name="dueDate"
        rules={[{ required: true, message: "Выберите дату!" }]}
      >
        <DatePicker className="w-full border-gray-300" />
      </AntForm.Item>

      <AntForm.Item
        label="Приоритет"
        name="priority"
        rules={[{ required: true, message: "Выберите приоритет!" }]}
        initialValue="low"
      >
        <Select className="border-gray-300">
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
  );
};

export default AddTaskForm;
