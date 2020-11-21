import { Type } from "@tsed/core";
import { JsonSchemaObject } from "../../domain/JsonSchema";
import { JsonHeader, JsonHeaders } from "../../interfaces/JsonOpenSpec";
export interface ReturnsChainedDecorators extends MethodDecorator {
    /**
     * Set a Content-Type for the current response
     * @param value
     * @constructor
     */
    ContentType(value: string): this;
    /**
     * Add a description
     * @param description
     */
    Description(description: string): this;
    /**
     * Add examples
     * @param examples
     */
    Examples(examples: any): this;
    /**
     * Change the model type
     * @param type
     */
    Type(type: Type<any> | any): this;
    /**
     * Change the status
     * @param status
     * @constructor
     */
    Status(status: string | number): this;
    /**
     * Add the nested types
     * @param types
     */
    Of(...types: (Type<any> | any)[]): this;
    /**
     * Declare a nested generic models
     * @param generics
     */
    Nested(...generics: (Type<any> | any)[]): this;
    /**
     * Add header.
     * @param key
     * @param value
     */
    Header(key: string, value: number | string | (JsonHeader & {
        value?: string | number;
    })): this;
    /**
     * Add headers
     */
    Headers(headers: JsonHeaders): this;
    /**
     * Assign partial schema
     * @param schema
     */
    Schema(schema: Partial<JsonSchemaObject>): this;
    [key: string]: any;
}
/**
 * Add responses documentation for a specific status code.
 *
 * ::: tip
 * Returns decorator API in v5 is completely different. If you are on Ts.ED v5 checkout our v5 documentation instead.
 * :::
 *
 * ## Usage
 *
 * Ts.ED v6 API introducing the chaining decorator concept. Now a decorator like Returns can be used with another decorators like Description.
 *
 * ```typescript
 *  @Returns(404, String).Description("Not Found")
 *  @Returns(200, Model).Description("Success")
 *  async myMethod(): Promise<Model>  {
 *
 *  }
 * ```
 *
 * ::: tip
 * TypeScript and you IDE will discover automatically the chained decorators. But for more details you can look on @@ReturnsChainedDecorators@@, to now
 * what chained decorators are available under Returns decorator.
 * :::
 *
 * This example will produce this documentation in swagger:
 *
 * ```json
 * {
 *   "responses": {
 *     "404": {
 *       "description": "Description",
 *       "schema": {"type": "string"}
 *     },
 *     "2OO": {
 *       "description": "Description",
 *       "schema": {"$ref": "..."}
 *     }
 *   }
 * }
 * ```
 *
 * ## Declaring an Array
 *
 * The array declaration change in v6. Use chained decorators to declare an array with model.
 *
 * ```typescript
 *  @Returns(200, Array).Of(Model).Description("Success")
 *  async myMethod(): Promise<Model>  {
 *
 *  }
 * ```
 *
 * ### Declaring a generic model
 *
 * Something, it might be useful to use generic models. TypeScript doesn't store the generic type in the metadata. This is why we need to
 * declare explicitly the generic models with the decorators.
 *
 * One of the generic's usage, can be a list pagination. With Ts.ED v6 it's now possible to declare generic and generate the appropriate Open Spec.
 *
 * Starting with the pagination model. By using @@Generics@@ and @@CollectionOf@@.
 *
 * ```typescript
 * @Generics("T")
 * class Pagination<T> {
 *  @CollectionOf("T")
 *  data: T[];
 *
 *  @Property()
 *  totalCount: number;
 * }
 * ```
 *
 * Now, we need a model to use it with the generic Pagination model:
 *
 * ```typescript
 * class Product {
 *  @Property()
 *  id: string;
 *
 *  @Property()
 *  title: string;
 * }
 * ```
 *
 * Finally, we can use our models on a method as following:
 *
 * ```typescript
 * class Controller {
 *   @OperationPath("POST", "/")
 *   @Returns(200, Pagination).Of(Product).Description("description")
 *   async method(): Promise<Pagination<Product> | null> {
 *     return null;
 *   }
 * }
 * ```
 *
 * ### Declaring a nested generics models
 *
 * It's also possible to declare a nested generics models in order to have `Pagination<Submission<Product>>`:
 *
 * ```typescript
 * class Controller {
 *   @OperationPath("POST", "/")
 *   @Returns(200, Pagination).Of(Submission).Nested(Product).Description("description")
 *   async method(): Promise<Pagination<Submission<Product>> | null> {
 *     return null;
 *   }
 * }
 * ```
 *
 * And here is the Submission model:
 *
 * ```typescript
 * @Generics("T")
 * class Submission<T> {
 *   @Property()
 *   _id: string;
 *   @Property("T")
 *   data: T;
 * }
 * ```
 *
 * @param status
 * @param model
 * @decorator
 * @swagger
 * @schema
 * @methodDecorator
 * @operation
 */
export declare function Returns(status?: string | number, model?: Type<any> | any): ReturnsChainedDecorators;
