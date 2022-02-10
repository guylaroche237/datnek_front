import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { UsersAction } from 'src/app/ngxs/users/users.action';
import { UserRequestService } from 'src/app/request/user-request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit ,OnDestroy{

  constructor(private router:Router,private route: ActivatedRoute,public userRequest:UserRequestService,private fb:FormBuilder,private store:Store) { }
  public listUsers!:User[];
  public addForm!:FormGroup;
  public postes :string[] = ["DevOps","Developpeur Front-End","Developpeur Back-End","Developpeur Full-stack","Marketing Digitale","Comunity Manager"];
  public images :string[] = ["../../../assets/avatar5.png","../../../assets/avatar2.png","../../../assets/avatar3.png","../../../assets/avatar.png","../../../assets/avatar04.png"]
  private saveSubscription: Subscription = new Subscription();
  ngOnInit(): void {
    
    this.router.navigate(['home'],{relativeTo:this.route});
    this.createForm();
     
  }

  createForm(){
    this.addForm = this.fb.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      image:['',Validators.required],
      poste:['',Validators.required],
      dateNaiss:['',Validators.required]
    });
  }

  clearForm(){
    this.addForm.reset();
  }

  onSubmit(){
    console.log(this.addForm.value);
    let user:User = new User(this.addForm.value['nom'],this.addForm.value['prenom'],this.addForm.value['image'],this.addForm.value['poste'],this.addForm.value['dateNaiss']);
    if(user.nom != ''){
      this.saveSubscription.add(
        this.store.dispatch(new UsersAction.SaveUser(user)).subscribe((res)=>{
          // en cas de success
        })
      );
    }
    
    
    this.clearForm();
    this.closeModal();
  }

  public openModal():boolean{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');  
    button.setAttribute('data-target','#modal-add');
    
    container?.appendChild(button);
    button.click();
    return true;
  }

  public closeModal(){
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    button.setAttribute('data-target','#modal-add');
    button.setAttribute('data-dismiss','modal');
    container?.appendChild(button);
    button.click();
  
  }

  ngOnDestroy(): void {
      this.saveSubscription.unsubscribe();
  }


}
