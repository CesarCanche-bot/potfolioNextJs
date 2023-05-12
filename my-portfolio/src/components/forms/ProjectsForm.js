import { Grid, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
export default function ProjectForm() {
  const defaultValues = {
    name: "",
    description: "",
    overview: "",
    tools: [],
    imageUrl: "",
  };

  const projectFormSchema = yup.object().shape({
    name: yup.string().required("you need to add a name"),
    description: yup.string(),
    overView: yup.string(),
    tools: yup.array(),
    image: you.string(),
  });

  const { control } = useForm({
    defaultValues,
    resolver: yup.resolver(projectFormSchema),
    mode: "all",
  });

  return (
    <form>
      <Grid container spacing={4}>
        <Grid item>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <TextField {...field} label="Project Name" variant="outlined" />
            )}
          />
        </Grid>
      </Grid>
    </form>
  );
}
