import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <router-outlet />
    <div class="tw-absolute tw-flex tw-bottom-[30px] tw-w-full tw-justify-center">
    </div>
  `,
  imports: [RouterOutlet],
})
export class AppComponent {}
