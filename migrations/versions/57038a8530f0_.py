"""empty message

Revision ID: 57038a8530f0
Revises: 6002c1c151d8
Create Date: 2022-06-06 10:39:30.828464

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '57038a8530f0'
down_revision = '6002c1c151d8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('content', 'image',
               existing_type=sa.VARCHAR(length=50000),
               nullable=False)
    op.alter_column('content', 'introduction',
               existing_type=sa.VARCHAR(length=2000),
               nullable=False)
    op.alter_column('content', 'subject',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('content', 'summary',
               existing_type=sa.VARCHAR(length=1250),
               nullable=False)
    op.alter_column('user', 'student_or_teacher',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'student_or_teacher',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    op.alter_column('content', 'summary',
               existing_type=sa.VARCHAR(length=1250),
               nullable=True)
    op.alter_column('content', 'subject',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('content', 'introduction',
               existing_type=sa.VARCHAR(length=2000),
               nullable=True)
    op.alter_column('content', 'image',
               existing_type=sa.VARCHAR(length=50000),
               nullable=True)
    # ### end Alembic commands ###
