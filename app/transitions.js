export default function(){

  this.transition(
    this.toRoute('index'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('exercises'),
    this.toRoute('weeks'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.toRoute('settings'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('weeks'),
    this.toRoute('week'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('week'),
    this.toRoute('day'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

}