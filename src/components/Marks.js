import React from 'react'


function Marks(props) {

  let telMarks=Number(props.tel);
  let hindiMarks=Number(props.hindi);
  let engMarks=Number(props.eng);
  let mathsMarks=Number(props.maths);
  let sciMarks=Number(props.sci);
  let socMarks=Number(props.soc);
  let toatalMarks=telMarks+hindiMarks+engMarks+sciMarks+mathsMarks+socMarks; 
  let  perc =(toatalMarks/600)*100

  return (
    <div>
       <table>
        <caption>{props.name}</caption>
        <thead>
            <tr>
                <td>S.no</td>
                <td>Subject</td>
                <td>Max.Marks</td>
                <td>Marks Gained</td>
                <td>Result</td>
                <td>Remarks</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>01</td>
                <td>Telugu</td>
                <td>100</td>
                <td>{telMarks}</td>
                <td>{telMarks>=35?"pass":"fail"}</td>
                <td>Good</td>
            </tr>
            <tr>
                <td>02</td>
                <td>Hindi</td>
                <td>100</td>
                <td>{hindiMarks}</td>
                <td>{hindiMarks>=35?"pass":"fail"}</td>
                <td>Good</td>
            </tr>
            <tr>
                <td>03</td>
                <td>English</td>
                <td>100</td>
                <td>{engMarks}</td>
                <td>{engMarks>=35?"pass":"fail"}</td>
                <td>Good</td>
            </tr>
            <tr>
                <td>04</td>
                <td>Maths</td>
                <td>100</td>
                <td>{mathsMarks}</td>
                <td>{maths>=35?"pass":"fail"}</td>
                <td>Good</td>
            </tr>
            <tr>
                <td>01</td>
                <td>science</td>
                <td>100</td>
                <td>{sciMarks}</td>
                <td>{sciMarks>=35?"pass":"fail"}</td>
                <td>Good</td>
            </tr>
            <tr>
                <td>06</td>
                <td>social</td>
                <td>100</td>
                <td>{socMarks}</td>
                <td>{socMarks>=35?"pass":"fail"}</td>
                <td>Good</td>
            </tr>
        </tbody>
        <tfoot>
       
            <tr>
                <td>Total</td>
                <td></td>
                <td>600</td>
                <td>{toatalMarks}({perc}%)</td>
                <td>pass</td>
                <td>Good</td>
            </tr>
        </tfoot>
       </table>
    </div>
  )
}

export default Marks