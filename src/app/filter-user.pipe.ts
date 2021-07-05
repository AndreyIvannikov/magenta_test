import { PipeTransform, Pipe } from "@angular/core";
import { user } from "./table-api.service";
@Pipe({
    name:'userFilter'
})
export class SearchUserPipe implements PipeTransform{

    transform(value:user[], exponent:string) {
        if(!value || !exponent) {
            return value
        }
        

        return value.filter((elem) => {
            console.log(elem.userId)
            return elem.id === +exponent
        })
    }
}