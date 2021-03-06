import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  vn: string;
  en: string;
  isShow = false;
  arWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  constructor() { }

  ngOnInit() {
  }

  addWord() {
    let word = { id: this.arWords.length + 1, en: this.en, vn: this.vn, memorized: false };
    this.arWords.unshift(word);
    this.isShow = !this.isShow;
    this.en = '';
    this.vn = '';
  }
  deleteWord(id) {
    let index = this.arWords.findIndex(e => e.id==id);
    this.arWords.splice(index, 1);
  }

}
