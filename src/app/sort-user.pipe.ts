import { PipeTransform, Pipe } from "@angular/core";
import { user } from "./table-api.service";
@Pipe({
    name:'userSort'
})
export class SearchUserPipe implements PipeTransform{

    transform(value:user[], exponent:string) {
        if(!value || !exponent) {
            return value
        }
        

        return value.sort((a,b) => {
            return a.id > b.id
        })
    }
}