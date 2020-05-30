@NgModule({
 imports: [
   BrowserModule,
   HttpModule,
   FormsModule,
  ],
 declarations: [
   AppComponent,
   SortGridPipe
  ],
 providers: [
   All_Services
  ],
 bootstrap: [
   AppComponent
  ],
 schemas: [
   CUSTOM_ELEMENTS_SCHEMA
  ]
})
