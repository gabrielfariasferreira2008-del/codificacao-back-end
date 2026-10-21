import { z } from "zod";

export const colaboradorSchema = z.object({
  nome: z.string().min(3, {
    error: "O nome deve conter no mínimo 3 caracteres",
  }),

  email: z.email({
    error: "Formato de e-mail inválido",
  }),

  idade: z.number({
    error: "A idade deve ser um número",
  })
    .min(18, {
      error: "A idade mínima é 18 anos",
    })
    .max(65, {
      error: "A idade máxima é 65 anos",
    }),

  departamento: z.enum(["TI", "RH", "Vendas"], {
    error: "Departamento deve ser obrigatoriamente TI, RH ou Vendas",
  }),
});

// Inferência automática do tipo estático TypeScript
export type Colaborador = z.infer<typeof colaboradorSchema>;