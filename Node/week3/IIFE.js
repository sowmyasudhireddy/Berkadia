(function linearsearch(a)
{
   var n=Number(a[2]);
   var flag=0;
   for(var i=0;i<a.length;i++)
   {
       if(Number(a[i])==n)
       {
           flag++;
           break;
       }
   }
   if(flag!=0)
   {
       console.log('number found');
   }
       else console.log('number doesnt exist');

})(process.argv.slice(2));


output:

PS C:\Users\Sowmya Sudhireddy\Desktop\week3-Assig> node IIFE.js
number doesnt exist
PS C:\Users\Sowmya Sudhireddy\Desktop\week3-Assig> node IIFE.js 2 1 5 7 8   1
number found
