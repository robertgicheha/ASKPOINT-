
import mssql from 'mssql'
import { sqlConfig } from '../Config/config'

class DatabaseHelper{
    public pool:Promise<mssql.ConnectionPool>
    constructor(){
        this.pool = mssql.connect(sqlConfig)
    }
    createRequest(request:mssql.Request,data:{[x:string]:string|number}){
        let keys = Object.keys(data)
        keys.map(keyName=>{
            request.input(keyName,data[keyName])
        })

        return request

    }

    async exec(sp:string,data:{[x:string]:string}={})  {

        let emptyRequest =await  (await this.pool).request()
        console.log("data",data);
        

        let request= this.createRequest(emptyRequest,data)
        let result = await (await request.execute(sp)).recordset
        console.log("result",result);
        

        return result

    }

    checkConnection(){
        return this.pool.then(()=>{
            return true
        }).catch(()=>{
            return false
        })
    }
}


export default DatabaseHelper