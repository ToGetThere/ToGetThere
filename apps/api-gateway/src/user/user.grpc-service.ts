import {User} from "@to-get-there/types";
import {Observable} from "rxjs";
import {Empty} from "@to-get-there/types";

export interface UserGrpcService {
  getUser(empty: Empty): Observable<User>
}
