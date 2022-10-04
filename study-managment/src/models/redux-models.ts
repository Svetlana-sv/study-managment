// * для хранения интерфейсов

type status = "ВЫПОЛНЕНО" | "НЕ ВЫПОЛНЕНО" | "В ПРОЦЕССЕ"

export interface TaskModel{
  "id": number,
  "name": string,
  "description": string,
  "date": string,
  "date_end": string,
  "status": status,
}
export interface TaskArrayModel{
  tasks:TaskModel[],
  // particular_todo:TaskModel
}