import * as graphql from "@nestjs/graphql";
import { PostAnalyticsResolverBase } from "./base/postAnalytics.resolver.base";
import { PostAnalytics } from "./base/PostAnalytics";
import { PostAnalyticsService } from "./postAnalytics.service";

@graphql.Resolver(() => PostAnalytics)
export class PostAnalyticsResolver extends PostAnalyticsResolverBase {
  constructor(protected readonly service: PostAnalyticsService) {
    super(service);
  }
}
