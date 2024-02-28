interface Task {
    description: string;
    value: number;
    checked: boolean;
  }
  
 export interface DropDownDetail {
    name: string;
    tasks: Task[];
  }