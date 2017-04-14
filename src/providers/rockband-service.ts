import { Injectable } from '@angular/core';

@Injectable()
export class RockbandService {

  constructor() {
    console.log('Hello RockbandService Provider');
  }

  getAll(){
    return [
      {
        title: 'Los prisioneros xxx',
        img:'https://i.ytimg.com/vi/Z0FNpbJDLzQ/maxresdefault.jpg',
        text: 'skjfhasdhfjkasdhf sdjkfhkasfh sdkjfhklsufh mhsdfksdf'
      },
      {
        title: 'nirvana',
        img:'assets/imgs/nirvana.jpg',
        text: 'skkdjf sdkfsd casdjhfasdfahgasjhdjkfhkasfh sdkjfhklsufh mhsdfksdf'
      },
      {
        title: 'ac/dc',
        img:'https://images5.alphacoders.com/433/thumb-1920-433503.jpg',
        text: '345663238739'
      }
    ]
  }

}
