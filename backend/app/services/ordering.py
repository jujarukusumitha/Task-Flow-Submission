def get_new_position(prev: float | None, next: float | None):
    if prev is None and next is None:
        return 1.0
    if prev is None:
        return next - 1
    if next is None:
        return prev + 1
    return (prev + next) / 2