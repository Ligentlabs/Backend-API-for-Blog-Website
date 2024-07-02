import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CategoryService } from "./category.service";
import { CategoryControllerBase } from "./base/category.controller.base";

@swagger.ApiTags("categories")
@common.Controller("categories")
export class CategoryController extends CategoryControllerBase {
  constructor(protected readonly service: CategoryService) {
    super(service);
  }
}
