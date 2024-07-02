import { Module } from "@nestjs/common";
import { CommentAnalyticsModuleBase } from "./base/commentAnalytics.module.base";
import { CommentAnalyticsService } from "./commentAnalytics.service";
import { CommentAnalyticsController } from "./commentAnalytics.controller";
import { CommentAnalyticsResolver } from "./commentAnalytics.resolver";

@Module({
  imports: [CommentAnalyticsModuleBase],
  controllers: [CommentAnalyticsController],
  providers: [CommentAnalyticsService, CommentAnalyticsResolver],
  exports: [CommentAnalyticsService],
})
export class CommentAnalyticsModule {}
