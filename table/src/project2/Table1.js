export default function Table1(){
 const data=[
  {
    "name":"pandi",
    "place":"covai",
    "work":"web developer",
    "phone":679809474
  },
  {
    "name":"veni",
    "place":"selam",
    "work":"software developer",
    "phone":7869958574
  },{
    "name":"arun",
    "place":"chennai",
    "work":"IT",
    "phone":6789456849
  },
  {
    "name":"dheena",
    "place":"theni",
    "work":"automobile",
    "phone":679809474
  
  },
  {
    "name":"priya",
    "place":"madhurai",
    "work":"police",
    "phone":679809474
  },
 ]

  return(
    <>
    <table>
      <tr>
       <th>name</th>
       <th>place</th>
       <th>work</th>
       <th>phone</th>

      </tr>
      {data.map((a)=>
      <tr>
       
        <td>{a.name}</td>
        <td>{a.place}</td>
        <td>{a.work}</td>
        <td>{a.phone}</td>
      </tr>
      )}
    </table>
    </>
  )
}