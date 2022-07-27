import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements DoCheck {
  public ngDoCheck(): void {
    console.log('do check',);
  }

}
