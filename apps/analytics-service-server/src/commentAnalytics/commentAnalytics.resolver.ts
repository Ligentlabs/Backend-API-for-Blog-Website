import * as graphql from "@nestjs/graphql";
import { CommentAnalyticsResolverBase } from "./base/commentAnalytics.resolver.base";
import { CommentAnalytics } from "./base/CommentAnalytics";
import { CommentAnalyticsService } from "./commentAnalytics.service";

@graphql.Resolver(() => CommentAnalytics)
export class CommentAnalyticsResolver extends CommentAnalyticsResolverBase {
  constructor(protected readonly service: CommentAnalyticsService) {
    super(service);
  }
}
