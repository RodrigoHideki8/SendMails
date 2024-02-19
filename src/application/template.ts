import { promises as fs } from "fs";
import * as path from "path";
import * as handlebars from "handlebars";

const templatesDir: string = path.join(__dirname, "../../assets/templates");

const renderTemplate = async (
  model: any,
  filename: string = "base"
): Promise<string> => {
  const file: string = path.join(templatesDir, `${filename}.html`);

  try {
    const templateContent: string = await fs.readFile(file, "utf-8");
    const template: HandlebarsTemplateDelegate<any> =
      handlebars.compile(templateContent);
    const renderedContent: string = template(model);

    return renderedContent;
  } catch (error) {
    console.error("Erro ao ler o arquivo:", error);
    throw error;
  }
};

export { renderTemplate };
