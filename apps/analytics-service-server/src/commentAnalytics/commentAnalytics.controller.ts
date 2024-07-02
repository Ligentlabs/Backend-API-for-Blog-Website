import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommentAnalyticsService } from "./commentAnalytics.service";
import { CommentAnalyticsControllerBase } from "./base/commentAnalytics.controller.base";

@swagger.ApiTags("commentAnalytics")
@common.Controller("commentAnalytics")
export class CommentAnalyticsController extends CommentAnalyticsControllerBase {
  constructor(protected readonly service: CommentAnalyticsService) {
    super(service);
  }
}
