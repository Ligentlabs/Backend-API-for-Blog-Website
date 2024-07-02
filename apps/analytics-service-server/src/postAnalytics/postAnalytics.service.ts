import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostAnalyticsServiceBase } from "./base/postAnalytics.service.base";

@Injectable()
export class PostAnalyticsService extends PostAnalyticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
