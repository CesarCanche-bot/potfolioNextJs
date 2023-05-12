import PageDescription from "@/components/PageDescription";
import { Chip, Grid, Stack } from "@mui/material";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function AboutPage({ skills }) {
  const router = useRouter();
  return (
    <section>
      <PageDescription
        title="About me"
        description="I am a full-stack developer with proficiency in both front-end and back-end development."
      />

      <Grid container spacing={2}>
        <Grid item md={6}>
          <h2>Get to know me</h2>
          <p>
            julio vrsds sdfsdf sdfs sdfsdf sdfsdf sdfsdf sfsdfsdf sdfsdf sdfsdf
            sdfsdf sdfsdf sdfsdf sdfsdf{" "}
          </p>
          <p>asdsdsf sdfsdf sdfsdf sdfsdf sdfsdf sdfsdf sdfsdf sdfsdf</p>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/contact")}
          >
            Contact
          </Button>
        </Grid>
        <Grid item md={6}>
          <h2>My Skills</h2>
          <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
            {skills.map((skill) => (
              <Chip key={skill} label={skill} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
}

export async function getStaticProps() {
  let skills = [];

  try {
    const response = await fetch(
      "https://my-skills-56d8d-default-rtdb.firebaseio.com/skills.json"
    );
    const data = await response.json();
    skills = data.split(",");
  } catch (error) {
    console.log("error", error);
  }
  return {
    props: {
      skills: skills,
    },
    revalidate: 30,
  };
}
