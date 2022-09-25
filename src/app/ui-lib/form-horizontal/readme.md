# horizontal form with validation

Horizontal form compatible on bootstrap, The theme contains validation and output event that returns validated json

## Download Command.

```jennie angular ui-lib download form-horizontal```

**make sure to run the command inside project**

## How to use


Declare HTML for the component

```html
<app-form-horizontal
    (form_submitted) = "onFormSubmitted($event)"
></app-form-horizontal>
```

here form_submitted refers to event. The event is called when form is submitted after all values are verified. delcare onFormSubmitted inside component.ts class.

```
onFormSubmitted(verified_form_data) {
    console.log(verified_form_data);
}
```
