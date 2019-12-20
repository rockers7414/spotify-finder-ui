import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { TrackService } from './services/track.service';
import { Track } from './objects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'spotify-finder-spa';
  searchForm: FormGroup;
  tracks: Track[];

  constructor(
    private fb: FormBuilder,
    private trackService: TrackService,
    private toastrService: NbToastrService,
  ) {
    this.searchForm = this.fb.group({
      keyword: [''],
    });
  }

  onSubmit() {
    this.trackService.search(this.searchForm.value.keyword)
      .subscribe(tracks => {
        this.tracks = tracks;
      }, (err) => {
        switch (err.status) {
          case 400:
            this.toastrService.danger('Invalid genre', 'Error');
            break;
          case 404:
            this.toastrService.danger('Resource Not Found', 'Error');
            break;
          case 500:
            this.toastrService.danger('Server Internal Error', 'Error');
            break;
        }
      });
  }

}
