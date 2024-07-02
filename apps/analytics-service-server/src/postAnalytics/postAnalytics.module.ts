import { Module } from "@nestjs/common";
import { PostAnalyticsModuleBase } from "./base/postAnalytics.module.base";
import { PostAnalyticsService } from "./postAnalytics.service";
import { PostAnalyticsController } from "./postAnalytics.controller";
import { PostAnalyticsResolver } from "./postAnalytics.resolver";

@Module({
  imports: [PostAnalyticsModuleBase],
  controllers: [PostAnalyticsController],
  providers: [PostAnalyticsService, PostAnalyticsResolver],
  exports: [PostAnalyticsService],
})
export class PostAnalyticsModule {}
