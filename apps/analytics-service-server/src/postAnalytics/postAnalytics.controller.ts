import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostAnalyticsService } from "./postAnalytics.service";
import { PostAnalyticsControllerBase } from "./base/postAnalytics.controller.base";

@swagger.ApiTags("postAnalytics")
@common.Controller("postAnalytics")
export class PostAnalyticsController extends PostAnalyticsControllerBase {
  constructor(protected readonly service: PostAnalyticsService) {
    super(service);
  }
}
