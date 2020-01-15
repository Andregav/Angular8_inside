import { Task } from './data_task-types';

export const TASK: Task[] = [
  {
    task_number: 336,
    task_code: 'DIAG01', 
    task__status: 'Done',
    dx: 'Grippe',    
    timeOpen: '2019-09-01T16:51:50.969Z', 
    timeClose: '2019-09-01T17:01:50.969Z',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    staff: "Dominik Huber", 
    position: 'GHS'
  },
  {
    task_number: 337,
    task_code: 'DIAG02', 
    task__status: 'Done',
    dx: 'Osteoarthrose',     
    timeOpen: '2019-11-10T14:51:50.969Z', 
    timeClose: '2019-12-21T15:51:50.969Z', 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    staff: 'Katrin Sommer', 
    position: 'Doctor'
  },
  {
    task_number: 338,
    task_code: 'DIAG03', 
    task__status: 'Done',
    dx: 'Hypertonische Krisen',     
    timeOpen: '2019-09-21T15:31:50.969Z', 
    timeClose: '2019-09-21T15:40:50.969Z', 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    staff: "Ulrich Krenn", 
    position: 'Care assistant'
  }  
];