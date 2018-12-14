import { Injectable } from '@angular/core';
@Injectable({
providedIn: 'root'
})
export class TodoService {

    constructor() {
    }
    getOptionsData()
    {
    return [
      {
       name:"projectdetails",
       value:"Display"
      },
      {
        name:"studentsdetails",
        value:"Display"
      }
    ];
}
    getTodoList(): any {
        return [
            {
                task: "project1",
                technology:"Angular",
                priority: "1",
            },
            {
                task: "project2",
                technology:"Node",
                priority: "2",
            },
            {
                task: "project3",
                technology:"MachineLearning",
                priority: "3",
            },
            {
                task: "project4",
                technology:"DataMining",
                priority: "4",
            },
            {
                task:"project5",
                technology:"Cloudcomputing",
                priority:"5",
            },
            {
                task:"project6",
                technology:"BigData",
                priority:"6",
            },
            {
                task:"project7",
                technology:"WebMining",
                priority:"5",
            }
        ];

    }
    
getStudentsData()
{
    return[
        {
            name:"sowmya",
            sec:"cseb6"
        },
        {
            name:"snehith",
            sec:"cseb3"
        },
        {
            name:"vivek",
            sec:"cseb7"
        },
        {
            name:"pallavi",
            sec:"cseb2"
        },
        {
            name:"subha",
            sec:"cseb5"
        }
    ];
}


}
