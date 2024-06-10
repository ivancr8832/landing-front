import { Component, OnInit, inject } from '@angular/core';
import { BlogService } from '../../../services';
import { BlogById } from '../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private blogSerivce = inject(BlogService);
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);

  public htmlSeguro!: SafeHtml;
  public blogSelected!: BlogById;

  ngOnInit(): void {
    this.blogSerivce.getBlogById(Number(this.route.snapshot.paramMap.get('id'))).subscribe(data => {
      this.blogSelected = data;
      this.htmlSeguro = this.sanitizer.bypassSecurityTrustHtml(data.content);
    })
  }

}
