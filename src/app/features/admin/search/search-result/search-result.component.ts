import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {UserModel} from '../../../../core/models/UserModel';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  userModel:UserModel[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data:{userFound:UserModel[]}) => this.userModel = data.userFound
    );
  }
  onRemoveGroupe(){}
  onRemoveRole(){}
}

