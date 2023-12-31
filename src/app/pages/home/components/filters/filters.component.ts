import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy{
  @Output() showCategory= new EventEmitter<string>();
  categoriesSub: Subscription | undefined;
  categories: Array<string> | undefined;

  constructor(private storeService: StoreService){}

  ngOnInit(): void {
      this.categoriesSub =this.storeService.getAllCategories().subscribe((res)=>{
        this.categories= res;
      })
  }

  onShowCategory(category: string):void{
    this.showCategory.emit(category);

  }

  ngOnDestroy(): void {
    if(this.categoriesSub){
      this.categoriesSub.unsubscribe();
    }
  }
}
