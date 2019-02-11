# NgCan
Library for simple access control depending on permissions / conditions.
<p>Build and tested with Angular v7.2.</p>

## How to use

Your module:
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgCanModule } from 'ng-can';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgCanModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}


```

Html template:
```typescript
...
<div ng-can [conditions]="{'can_edit': true}"
      [permissions]="permissions"
      [strictMode]="true">
</div>
...
```

Component:
```typescript
...
protected permissions = {'can_edit': true, 'can_delete': false};
...
```

Library Will check if conditions `{'can_edit': true}` are met to permissions `{'can_edit': false, 'can_delete': false}`. DIV will be allowed to use.

##Strict mode
`strictMode` enables the check for non existing permissions and won't allow to use Element in case of missing it:
```typescript
...
<div ng-can [conditions]="{'can_modify': true}"
      [permissions]="permissions"
      [strictMode]="true">
</div>
...
```

Component:
```typescript
...
protected permissions = {'can_edit': true, 'can_delete': false};
...
```
DIV won't be allowed to use.

## Module Options
Set you default Hide Approach from Module Options initializing:
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgCanModule } from '../../projects/ng-can/src/lib/ng-can.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgCanModule.forChild({
      hide_approach: 'visibility'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}
```

Available Hide Approaches are: 'visibility' and 'hidden'. *Hidden* approach will use native HTML [hidden] property hiding the patient and making space free of Element on the page. 
*Visibility* will only hide Element with no influence on your layout.  
You can overwrite default Hide Approach by passing property parameter inside the directive:  
```angular2html
  <li ng-can [conditions]="{'can_edit': true}"
      [permissions]="permissions"
      [hideApproach]="'hidden'"
      [strictMode]="true">
    <h2>
      <a target="_blank" rel="noopener" href="https://angular.io/tutorial">Hidden</a>
    </h2>
  </li>
```
