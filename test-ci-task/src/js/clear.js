export default function showHealthStatus(obj) {
  // Вот здесь с линтом очень странно получилось воообще,
  // я сначала писал через тернарный оператор, он ругался на вложенность,
  // переписал через логическую конструкцию, ругался на else перед return,
  // теперь вот на коммент ругается,
  // в общем, только так не ругается
  if (obj.health > 50) {
    return 'healthy';
  }
  if (obj.health <= 50 && obj.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
