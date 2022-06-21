"""empty message

Revision ID: ffb88034c223
Revises: 0c08c6a844b6
Create Date: 2022-06-15 19:21:39.410174

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ffb88034c223'
down_revision = '0c08c6a844b6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('content')
    op.drop_table('teacher')
    op.drop_table('user')
    op.drop_table('student')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('student',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('first_name', sa.VARCHAR(length=100), autoincrement=False, nullable=False),
    sa.Column('last_name', sa.VARCHAR(length=100), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='student_pkey'),
    sa.UniqueConstraint('email', name='student_email_key')
    )
    op.create_table('user',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('student_or_teacher', sa.BOOLEAN(), autoincrement=False, nullable=True),
    sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='user_pkey'),
    sa.UniqueConstraint('email', name='user_email_key')
    )
    op.create_table('teacher',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('avatar', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('first_name', sa.VARCHAR(length=100), autoincrement=False, nullable=False),
    sa.Column('last_name', sa.VARCHAR(length=100), autoincrement=False, nullable=False),
    sa.Column('subjects', sa.VARCHAR(length=100), autoincrement=False, nullable=False),
    sa.Column('why_you_teach', sa.VARCHAR(length=200), autoincrement=False, nullable=False),
    sa.Column('years_experience', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('fun_info', sa.VARCHAR(length=100), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='teacher_pkey'),
    sa.UniqueConstraint('avatar', name='teacher_avatar_key'),
    sa.UniqueConstraint('email', name='teacher_email_key')
    )
    op.create_table('content',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('title', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('subject', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('introduction', sa.VARCHAR(length=2000), autoincrement=False, nullable=False),
    sa.Column('written_content', sa.VARCHAR(length=5000), autoincrement=False, nullable=False),
    sa.Column('summary', sa.VARCHAR(length=1250), autoincrement=False, nullable=False),
    sa.Column('key_word1', sa.VARCHAR(length=30), autoincrement=False, nullable=True),
    sa.Column('key_word2', sa.VARCHAR(length=30), autoincrement=False, nullable=True),
    sa.Column('key_word3', sa.VARCHAR(length=30), autoincrement=False, nullable=True),
    sa.Column('question1', sa.VARCHAR(length=500), autoincrement=False, nullable=True),
    sa.Column('question2', sa.VARCHAR(length=500), autoincrement=False, nullable=True),
    sa.Column('question3', sa.VARCHAR(length=500), autoincrement=False, nullable=True),
    sa.Column('question4', sa.VARCHAR(length=500), autoincrement=False, nullable=True),
    sa.Column('image', sa.VARCHAR(length=50000), autoincrement=False, nullable=True),
    sa.Column('date', sa.VARCHAR(length=30), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='content_pkey')
    )
    # ### end Alembic commands ###