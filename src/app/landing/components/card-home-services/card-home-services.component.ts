import { Component, Input, OnDestroy, ViewEncapsulation, inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogScheduleMeetingComponent } from '../dialog-schedule-meeting/dialog-schedule-meeting.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackConfirmationComponent } from '../snack-confirmation/snack-confirmation.component';
import { DataCloseModal } from '../../interfaces';

@Component({
  selector: 'home-card-services',
  templateUrl: './card-home-services.component.html',
  styleUrls: ['./card-home-services.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardHomeServicesComponent implements OnDestroy {

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() icon: string = '';
  @Input() isOpenModal: boolean = false;
  @Input() putAddressField: boolean = false;

  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  private dialogRef?: MatDialogRef<DialogScheduleMeetingComponent, any>;

  openModal(): void {

    if(!this.isOpenModal) return;

    this.dialogRef = this.dialog.open(DialogScheduleMeetingComponent, {
      data: this.putAddressField,
      disableClose: true,
      width: '700px'
    });

    this.dialogRef.afterClosed().subscribe((result: DataCloseModal) => {
      if (result) {
        this.openSnackBar(result)
      }
    });
  }

  openSnackBar(data: DataCloseModal) {
    this.snackBar.openFromComponent(SnackConfirmationComponent, {
      data,
      duration: 4000,
      panelClass: (data.result) ? 'success-snack' : 'error-snack',
      horizontalPosition: 'start',
      verticalPosition: 'bottom'
    });
  }

  ngOnDestroy(): void {
    this.dialogRef?.close();
  }
}
