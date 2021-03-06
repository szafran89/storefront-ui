import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import notes from "./README.md";
import SfCallToAction from "./SfCallToAction.vue";

export default storiesOf("CallToAction", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      components: { SfCallToAction },
      props: {
        title: {
          default: text("title (prop)", "Title prop")
        },
        description: {
          default: text(
            "description (prop)",
            "Description prop lorem ipsum dolor sit amet"
          )
        },
        buttonText: {
          default: text("buttonText (prop)", "ButtonText prop")
        }
      },
      template: `
      <SfCallToAction
        :title="title"
        :button-text="buttonText"
        :description="description"
      />
    `
    }),
    {
      notes,
      info: true
    }
  )
  .add(
    "[slot] title",
    () => ({
      components: { SfCallToAction },
      template: `
      <SfCallToAction
        button-text="Check out"
        description="Description prop lorem ipsum dolor sit amet"
      >
        <template #title>
          <h1> Lorem ipsum </h1>
        </template>
      </SfCallToAction>
    `
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] description",
    () => ({
      components: { SfCallToAction },
      template: `
      <SfCallToAction
        title="Title prop"
        button-text="Check out"
      >
        <template #description>
          <p> Description slot lorem ipsum dolor sit amet</p>
        </template>
      </SfCallToAction>
    `
    }),
    {
      info: true
    }
  )

  .add(
    "[slot] action",
    () => ({
      components: { SfCallToAction },
      template: `
      <SfCallToAction
        title="Title prop"
        description="Description prop lorem ipsum dolor sit amet"
      >
        <template #action>
          <button>Custom CTA</button>
        </template>
      </SfCallToAction>
    `
    }),
    {
      notes,
      info: true
    }
  );
