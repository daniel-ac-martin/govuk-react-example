import React from 'react';
import { Form, Field } from 'react-final-form';
import { Button, InputField, DateInput, Layout, GridRow, GridCol } from 'govuk-react';

// based on https://codesandbox.io/s/40mr0v2r87
const DateInputAdapter = ({ input, meta, ...rest }) => (
  <DateInput
    {...input}
    {...rest}
    onChange={(event, value) => input.onChange(value)}
    errorText={meta.touched ? meta.error : ''}
  />
);

const InputFieldAdapter = ({ input, meta, ...rest }) => (
  <InputField
    {...input}
    {...rest}
    onChange={(event, value) => input.onChange(value)}
    errorText={meta.touched ? meta.error : ''}
  />
)


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const required = value => (value ? undefined : 'Required');




const App = () => (
  <div>
    <Form
      onSubmit={onSubmit}
      render={({
 handleSubmit, reset, submitting, pristine, values,
}) => (
  <form onSubmit={handleSubmit}>
    <Layout>
      <GridRow>
        <GridCol>
          <Field
            name="firstName"
            component={InputFieldAdapter}
            validate={required}
            hintText="e.g. John Smith"
          >
            Name
          </Field>
        </GridCol>
      </GridRow>
      <GridRow>
        <GridCol>
          <Field
            name="dob"
            component={DateInputAdapter}
            validate={required}
            hintText="31 3 1980"
            labelPosition="right"
          >
          Date of birth
          </Field>
        </GridCol>
      </GridRow>
      <GridRow>
        <GridCol columnOneQuarter>
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
        </GridCol>
        <GridCol columnOneQuarter>
          <Button
            type="button"
            onClick={reset}
            disabled={submitting || pristine}
          >
            Reset
          </Button>
        </GridCol>
        <GridCol columnOneQuarter />
        <GridCol columnOneQuarter />
      </GridRow>
      <GridRow>
        <GridCol>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </GridCol>
      </GridRow>
    </Layout>
  </form>
      )}
    />
  </div>
);

export default App;
