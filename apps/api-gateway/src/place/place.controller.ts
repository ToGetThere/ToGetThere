import {Controller, Get} from "@nestjs/common";
import {PlaceService} from "./place.service";

@Controller('/v1/place')
export class PlaceController {
  constructor(private placeService: PlaceService) {}

  @Get('/')
  login() {
    return this.placeService.getPlace();
  }
}
