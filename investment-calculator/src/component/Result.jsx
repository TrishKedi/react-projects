import {calculateInvestmentResults, formatter} from "../util/investment"
const tableHeaders = [
    'Year',
    'Investment Value',
    'Interest',
    'Total Interest',
    'Invevsted capital',
    
]
export default function Result({values}){
    const annualData = calculateInvestmentResults(values)
    const initialInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment
    // console.log(annualData)

        // console.log(formatter.format(annualData[0].valueEndOfYear))
        // console.log(formatter.format(annualData[0].investedCapital))
        // console.log(formatter.format(annualData[0].annualInvestment))
        

   
    return (
        <div >
            <table id="result">
                <thead>
                    {tableHeaders.map((theader) => <th>{theader}</th>)}
                    
                </thead>
                <tbody>
                    {annualData.map((rowData) => 
                    {
                        const totalValue = rowData.valueEndOfYear - (rowData.annualInvestment * rowData.year) - initialInvestment
                        const totalAmount = rowData.valueEndOfYear - totalValue

                        return(
                            <tr>
                                <td>{rowData.year}</td>
                                <td>{formatter.format(rowData.valueEndOfYear)}</td>
                                <td>{formatter.format(rowData.interest)}</td>
                                <td>{formatter.format(totalValue)}</td>
                                <td>{formatter.format(totalAmount)}</td>
                            </tr>
                        )}
                    )}
                    
                </tbody>
            </table>
        </div>
      

    );
}